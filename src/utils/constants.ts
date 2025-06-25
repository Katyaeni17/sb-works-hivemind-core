
// Application constants
export const USER_ROLES = {
  FREELANCER: 'freelancer',
  CLIENT: 'client',
  ADMIN: 'admin',
} as const;

export const PROJECT_STATUS = {
  OPEN: 'open',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const PROPOSAL_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
} as const;

export const SKILL_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'Graphic Design',
  'UI/UX Design',
  'Content Writing',
  'Digital Marketing',
  'Data Analysis',
  'Video Editing',
  'Translation',
  'Virtual Assistant',
] as const;

export const EXPERIENCE_LEVELS = {
  ENTRY: 'entry',
  INTERMEDIATE: 'intermediate',
  EXPERT: 'expert',
} as const;
