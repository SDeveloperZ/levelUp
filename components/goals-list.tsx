import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonProgressBar,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFooter,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';
import { add, home, calendar, person, star, thumbsDown, trophy } from 'ionicons/icons';
import type { Goal } from '@/types/index';

interface GoalsListProps {
  goals: Goal[];
  onAddGoal: () => void;
  onNavigateToHome: () => void;
  onNavigateToAchievements: () => void;
  onNavigateToFriends: () => void; // Added onNavigateToFriends
  onGoalClick: (goal: Goal) => void;
}

type TabValue = 'en-curso' | 'completada' | 'vencida';

export const GoalsList: React.FC<GoalsListProps> = ({
  goals,
  onAddGoal,
  onNavigateToHome,
  onNavigateToAchievements,
  onGoalClick,
  onNavigateToFriends, // Added onNavigateToFriends
}) => {
  const [selectedTab, setSelectedTab] = useState<TabValue>('en-curso');

  const filteredGoals = goals.filter(goal => goal.status === selectedTab);

  const getStatusIcon = (status: TabValue) => {
    switch (status) {
      case 'completada':
        return star;
      case 'vencida':
        return thumbsDown;
      default:
        return null;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Metas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSegment 
          value={selectedTab} 
          onIonChange={e => setSelectedTab(e.detail.value as TabValue)}
          className="mb-4"
        >
          <IonSegmentButton value="en-curso">
            <IonLabel>En curso</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="completada">
            <IonLabel>Finalizadas</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="vencida">
            <IonLabel>Vencidas</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <div className="space-y-4">
          {filteredGoals.map((goal) => (
            <IonCard 
              key={goal.id} 
              className="p-4"
              onClick={() => onGoalClick(goal)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <IonText>{goal.title}</IonText>
                  </div>
                  {getStatusIcon(goal.status) && (
                    <IonIcon 
                      icon={getStatusIcon(goal.status)} 
                      className={`w-6 h-6 ${
                        goal.status === 'completada' ? 'text-yellow-400' : 'text-gray-500'
                      }`}
                    />
                  )}
                </div>
                <IonProgressBar 
                  value={goal.progress}
                  className="h-1.5 rounded-full"
                  color={goal.status === 'completada' ? 'success' : undefined}
                />
                <div className="text-right text-sm text-gray-500">
                  {Math.round(goal.progress * 100)}%
                </div>
              </div>
            </IonCard>
          ))}
        </div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={onAddGoal}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>

      <IonFooter>
        <div className="h-16 bg-white border-t flex justify-around items-center">
          <IonButton fill="clear" onClick={onNavigateToHome}>
            <IonIcon icon={home} />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon icon={calendar} />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToAchievements}>
            <IonIcon icon={trophy} />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToFriends}> {/* Updated person button */}
            <IonIcon icon={person} />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

