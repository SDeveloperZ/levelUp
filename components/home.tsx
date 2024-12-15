import React from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonText,
  IonFooter,
} from '@ionic/react';
import { home, calendar, person, chevronForward, thumbsUp, trophy } from 'ionicons/icons';
import type { Goal, Friend } from '@/types/index';

interface HomeProps {
  onNavigateToGoals: () => void;
  onAddGoal: () => void;
  onNavigateToAchievements: () => void;
  onNavigateToFriends: () => void;
  goals: Goal[];
  friends: Friend[];
}

export const Home: React.FC<HomeProps> = ({
  onNavigateToGoals,
  onAddGoal,
  onNavigateToAchievements,
  onNavigateToFriends,
  goals,
  friends,
}) => {
  const achievements = [
    'Correr cada día',
    'Correr cada día',
    'Correr cada día',
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="space-y-6">
          {/* Mis metas section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <IonText className="text-lg font-semibold">
                Mis metas
              </IonText>
              <IonButton fill="clear" size="small" onClick={onNavigateToGoals}>
                ver todo
                <IonIcon icon={chevronForward} slot="end" />
              </IonButton>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {goals.slice(0, 3).map(goal => (
                <div key={goal.id} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-2">
                    <div className="w-full h-full rounded-full bg-gray-200" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IonText>{Math.round(goal.progress * 100)}%</IonText>
                    </div>
                  </div>
                  <IonText className="text-xs mb-2 block">
                    {goal.title}
                  </IonText>
                  <IonButton 
                    size="small"
                    expand="block"
                    className="h-8"
                  >
                    Hecho
                    <IonIcon icon={thumbsUp} slot="end" />
                  </IonButton>
                </div>
              ))}
            </div>

            <IonButton 
              expand="block" 
              fill="clear"
              className="mt-4 bg-gray-100 h-12"
              onClick={onAddGoal}
            >
              Agregar nueva meta
            </IonButton>
          </div>

          {/* Mis logros section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <IonText className="text-lg font-semibold">
                Mis logros
              </IonText>
              <IonButton fill="clear" size="small" onClick={onNavigateToAchievements}>
                ver todo
                <IonIcon icon={chevronForward} slot="end" />
              </IonButton>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    😊
                  </div>
                  <IonText className="text-sm">
                    Haz cumplido con tu desafío de: "{achievement}"
                  </IonText>
                </div>
              ))}
            </div>
          </div>

          {/* Acción del día section */}
          <div>
            <IonText className="text-lg font-semibold block mb-4">
              Acción del día
            </IonText>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <IonText className="text-sm">
                  Acción del día sugerida para realizar en el día.
                </IonText>
                <IonButton size="small">
                  Hecho
                  <IonIcon icon={thumbsUp} slot="end" />
                </IonButton>
              </div>
            </div>
          </div>

          {/* Mis amigos section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <IonText className="text-lg font-semibold">
                Mis amigos
              </IonText>
              <IonButton fill="clear" size="small" onClick={onNavigateToFriends}>
                ver todo
                <IonIcon icon={chevronForward} slot="end" />
              </IonButton>
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {friends.map((friend) => (
                <div 
                  key={friend.id} 
                  className={`flex-shrink-0 bg-gray-100 rounded-lg p-3 ${
                    friend.isHighlighted ? 'ring-2 ring-yellow-400' : ''
                  }`}
                >
                  <IonText className="text-sm font-medium block">
                    {friend.name}
                  </IonText>
                  <IonButton 
                    fill="clear" 
                    size="small"
                    className="h-6"
                  >
                    Ver progreso
                    <IonIcon icon={chevronForward} slot="end" />
                  </IonButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </IonContent>

      <IonFooter>
        <div className="h-16 bg-white border-t flex justify-around items-center">
          <IonButton fill="clear">
            <IonIcon icon={home} />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToGoals}>
            <IonIcon icon={calendar} />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToAchievements}>
            <IonIcon icon={trophy} />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToFriends}>
            <IonIcon icon={person} />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

