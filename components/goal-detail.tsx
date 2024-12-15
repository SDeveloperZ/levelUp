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
  IonCheckbox,
} from '@ionic/react';
import { close, home, calendar, person, trophy } from 'ionicons/icons';
import type { Goal } from '@/types/index';

interface GoalDetailProps {
  goal: Goal;
  onClose: () => void;
  onNavigateToHome: () => void;
  onNavigateToAchievements: () => void;
  onNavigateToFriends: () => void;
}

export const GoalDetail: React.FC<GoalDetailProps> = ({
  goal,
  onClose,
  onNavigateToHome,
  onNavigateToAchievements,
  onNavigateToFriends,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="px-4">
          <IonTitle>Mis Metas</IonTitle>
          <IonButton slot="end" fill="clear" onClick={onClose}>
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">{goal.title}</h2>

          <div className="space-y-4">
            <div>
              <IonText className="text-sm block mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              </IonText>
            </div>

            <div>
              <IonText className="text-sm block mb-2">Fecha de Fin</IonText>
              <div className="bg-gray-100 rounded-md p-3">
                {goal.endDate || '12/12/2025'}
              </div>
            </div>

            <div>
              <IonText className="text-sm font-semibold block mb-2">Progreso</IonText>
              <div className="space-y-2">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 rounded-md p-3"
                  >
                    <IonText className="flex-1">Día {index + 1}</IonText>
                    <IonCheckbox
                      checked={goal.dailyProgress?.[index] || false}
                      className="ml-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
          <IonButton fill="clear" onClick={onNavigateToFriends}>
            <IonIcon icon={person} />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

