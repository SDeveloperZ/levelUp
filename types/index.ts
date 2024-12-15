export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

export interface Goal {
  id: number;
  title: string;
  progress: number;
  status: 'en-curso' | 'completada' | 'vencida';
  description?: string;
  endDate?: string;
  dailyProgress?: boolean[];
}

export interface Friend {
  id: number;
  name: string;
  progress: number;
  isHighlighted?: boolean;
}

export type View = 
  | 'login' 
  | 'register' 
  | 'loginForm' 
  | 'home' 
  | 'goals' 
  | 'goalDetail' 
  | 'addGoal';

