'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized coding challenge suggestions
 * based on a user's performance history and preferred topics.
 *
 * - `getPersonalizedChallenges` -  A function that takes user data and returns personalized coding challenge suggestions.
 * - `PersonalizedChallengesInput` - The input type for the `getPersonalizedChallenges` function.
 * - `PersonalizedChallengesOutput` - The output type for the `getPersonalizedChallenges` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedChallengesInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A string containing the user history, including the challenges they have attempted, their success rate, and any notes on their performance.'
    ),
  preferredTopics: z
    .string()
    .describe('A comma-separated list of the user preferred coding topics.'),
});

export type PersonalizedChallengesInput = z.infer<
  typeof PersonalizedChallengesInputSchema
>;

const PersonalizedChallengesOutputSchema = z.object({
  challengeSuggestions: z
    .array(z.string())
    .describe(
      'A list of coding challenge suggestions tailored to the user performance and preferred topics.'
    ),
});

export type PersonalizedChallengesOutput = z.infer<
  typeof PersonalizedChallengesOutputSchema
>;

export async function getPersonalizedChallenges(
  input: PersonalizedChallengesInput
): Promise<PersonalizedChallengesOutput> {
  return personalizedChallengesFlow(input);
}

const personalizedChallengesPrompt = ai.definePrompt({
  name: 'personalizedChallengesPrompt',
  input: {schema: PersonalizedChallengesInputSchema},
  output: {schema: PersonalizedChallengesOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized coding challenge suggestions.
Analyze the user past performance and preferred topics to suggest coding challenges that align with their needs.

User History: {{{userHistory}}}
Preferred Topics: {{{preferredTopics}}}

Based on this information, suggest coding challenges to improve the user skills.
Return a list of challenge suggestions. Focus on suggesting real challenges, not just topics.

Challenge Suggestions:
{{#each challengeSuggestions}}- {{{this}}}\n{{/each}}`,
});

const personalizedChallengesFlow = ai.defineFlow(
  {
    name: 'personalizedChallengesFlow',
    inputSchema: PersonalizedChallengesInputSchema,
    outputSchema: PersonalizedChallengesOutputSchema,
  },
  async input => {
    const {output} = await personalizedChallengesPrompt(input);
    return output!;
  }
);
