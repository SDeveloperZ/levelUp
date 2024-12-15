"use client"

import React, { useState } from 'react';
import { IonApp, setupIonicReact } from '@ionic/react';
import type { AuthFormData, Goal, Friend, View } from '@/types/index';

import { Login } from '@/components/login';
import { Register } from '@/components/register';
import { LoginForm } from '@/components/login-form';
import { Home } from '@/components/home';
import { GoalsList } from '@/components/goals-list';
import { GoalDetail } from '@/components/goal-detail';
import { AddGoal } from '@/components/add-goal';
import { Achievements } from '@/components/achievements';
import { FriendsList } from '@/components/friends-list';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';

setupIonicReact();

export type View = 
| 'login' 
| 'register' 
| 'loginForm' 
| 'home' 
| 'goals' 
| 'goalDetail' 
| 'addGoal'
| 'achievements'
| 'friends';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [user, setUser] = useState<AuthFormData | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  
  // Mock data
  const [goals] = useState<Goal[]>([
    { 
      id: 1, 
      title: 'Correr una hora por día', 
      progress: 0.6,
      status: 'en-curso'
    },
    { 
      id: 2, 
      title: 'Meditar una hora al día', 
      progress: 1,
      status: 'completada'
    },
    { 
      id: 3, 
      title: 'Correr cada día', 
      progress: 0.55,
      status: 'vencida'
    },
  ]);

  const [friends] = useState<Friend[]>([
    { id: 1, name: 'Sergio Lopez', progress: 0.7 },
    { id: 2, name: 'Cris Contana', progress: 0.8, isHighlighted: true },
    { id: 3, name: 'Chavez', progress: 0.6 },
  ]);

  const handleLogin = (data: AuthFormData) => {
    setUser(data);
    setCurrentView('home');
  };

  const handleRegister = (data: AuthFormData) => {
    setUser(data);
    setCurrentView('home');
  };

  const handleAddGoal = (goal: any) => {
    setCurrentView('goals');
  };

  const handleGoalClick = (goal: Goal) => {
    setSelectedGoal(goal);
    setCurrentView('goalDetail');
  };

  const navigateToHome = () => setCurrentView('home');
  const navigateToGoals = () => setCurrentView('goals');
  const navigateToAchievements = () => setCurrentView('achievements');
  const navigateToFriends = () => setCurrentView('friends');

  return (
    <IonApp>
      {currentView === 'login' && (
        <Login
          onNavigateToRegister={() => setCurrentView('register')}
          onNavigateToLoginForm={() => setCurrentView('loginForm')}
        />
      )}
      
      {currentView === 'register' && (
        <Register
          onClose={() => setCurrentView('login')}
          onRegister={handleRegister}
        />
      )}
      
      {currentView === 'loginForm' && (
        <LoginForm
          onLogin={handleLogin}
          onCancel={() => setCurrentView('login')}
        />
      )}
      
      {currentView === 'home' && (
        <Home 
          goals={goals}
          friends={friends}
          onNavigateToGoals={navigateToGoals}
          onAddGoal={() => setCurrentView('addGoal')}
          onNavigateToAchievements={navigateToAchievements}
          onNavigateToFriends={navigateToFriends}
        />
      )}
      
      {currentView === 'goals' && (
        <GoalsList 
          goals={goals}
          onAddGoal={() => setCurrentView('addGoal')}
          onNavigateToHome={navigateToHome}
          onNavigateToAchievements={navigateToAchievements}
          onNavigateToFriends={navigateToFriends}
          onGoalClick={handleGoalClick}
        />
      )}

      {currentView === 'goalDetail' && selectedGoal && (
        <GoalDetail
          goal={selectedGoal}
          onClose={() => setCurrentView('goals')}
          onNavigateToHome={navigateToHome}
          onNavigateToAchievements={navigateToAchievements}
          onNavigateToFriends={navigateToFriends}
        />
      )}

      {currentView === 'addGoal' && (
        <AddGoal
          onClose={() => setCurrentView('goals')}
          onSave={handleAddGoal}
          onNavigateToHome={navigateToHome}
        />
      )}

      {currentView === 'achievements' && (
        <Achievements
          onNavigateToHome={navigateToHome}
          onNavigateToGoals={navigateToGoals}
          onNavigateToFriends={navigateToFriends}
        />
      )}

      {currentView === 'friends' && (
        <FriendsList
          friends={friends}
          onNavigateToHome={navigateToHome}
          onNavigateToGoals={navigateToGoals}
          onNavigateToAchievements={navigateToAchievements}
          onAddGoal={() => setCurrentView('addGoal')}
        />
      )}
    </IonApp>
  );
}

