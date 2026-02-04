
export const CHALLENGES = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    topic: 'Arrays',
    acceptance: '49.2%',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      }
    ]
  },
  {
    id: '2',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    topic: 'Linked Lists',
    acceptance: '39.8%',
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
    constraints: [
      'The number of nodes in each linked list is in the range [1, 100].',
      '0 <= Node.val <= 9',
      'It is guaranteed that the list represents a number that does not have leading zeros.'
    ],
    examples: [
      {
        input: 'l1 = [2,4,3], l2 = [5,6,4]',
        output: '[7,0,8]',
        explanation: '342 + 465 = 807.'
      }
    ]
  },
  {
    id: '3',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    topic: 'Binary Search',
    acceptance: '35.1%',
    description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
    constraints: [
      'nums1.length == m',
      'nums2.length == n',
      '0 <= m <= 1000',
      '0 <= n <= 1000',
      '1 <= m + n <= 2000',
      '-10^6 <= nums1[i], nums2[i] <= 10^6'
    ],
    examples: [
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.00000',
        explanation: 'merged array = [1,2,3] and median is 2.'
      }
    ]
  }
];

export const COURSES = [
  {
    id: 'c1',
    title: 'Algorithms 101',
    instructor: 'Dr. Sarah Smith',
    duration: '12 Hours',
    rating: 4.8,
    level: 'Beginner',
    image: 'course-algorithms'
  },
  {
    id: 'c2',
    title: 'Advanced React Patterns',
    instructor: 'Michael Chen',
    duration: '8 Hours',
    rating: 4.9,
    level: 'Advanced',
    image: 'course-react'
  },
  {
    id: 'c3',
    title: 'Python for Data Engineers',
    instructor: 'Elena Rodriguez',
    duration: '15 Hours',
    rating: 4.7,
    level: 'Intermediate',
    image: 'course-python'
  }
];

export const REVIEWS = [
  {
    id: 'r1',
    userName: 'Alex Johnson',
    avatar: 'user-avatar-1',
    rating: 5,
    comment: 'The best coding practice app I have ever used. The AI suggestions actually helped me find patterns I missed before.',
    date: '2 days ago'
  },
  {
    id: 'r2',
    userName: 'Samantha Lee',
    avatar: 'user-avatar-2',
    rating: 4,
    comment: 'Great interface. The dark mode is super easy on the eyes during late night grind.',
    date: '1 week ago'
  }
];

export const PROJECTS = [
  {
    id: 'p1',
    title: 'Microservices Mesh',
    author: 'TechLead2024',
    stars: 124,
    image: 'project-e-commerce',
    tags: ['Go', 'Docker', 'K8s']
  },
  {
    id: 'p2',
    title: 'Kanban Mastery',
    author: 'DesignGuru',
    stars: 89,
    image: 'project-task-manager',
    tags: ['React', 'Zustand', 'Tailwind']
  }
];
