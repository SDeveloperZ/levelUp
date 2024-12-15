import React from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonButton,
  IonIcon,
  IonText,
} from '@ionic/react';
import { home, calendar, person, trophy } from 'ionicons/icons';

interface AchievementsProps {
  onNavigateToHome: () => void;
  onNavigateToGoals: () => void;
  onNavigateToFriends: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onNavigateToHome, onNavigateToGoals, onNavigateToFriends }) => {
  const achievementStats = [
    { title: 'Logros del día', value: 4 },
    { title: 'Logros de los últimos 7 días', value: 18 },
    { title: 'Logros último mes', value: 72 },
    { title: 'Logros totales', value: 150 },
  ];

  const goalsReached = 16;

  const todaysAchievements = [
    'Haz cumplido con tu desafío de: "Correr cada día"',
    'Haz cumplido con tu desafío de: "Correr cada día"',
    'Haz cumplido con tu desafío de: "Correr cada día"',
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Logros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {achievementStats.map((stat, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <IonText className="text-2xl font-bold">{stat.value}</IonText>
                <IonText className="text-sm block">{stat.title}</IonText>
              </div>
            ))}
            <div className="bg-gray-100 p-4 rounded-lg col-span-2">
              <IonText className="text-2xl font-bold">{goalsReached}</IonText>
              <IonText className="text-sm block">Metas alcanzadas 🏆</IonText>
            </div>
          </div>

          <div>
            <IonText className="text-lg font-semibold block mb-4">
              Mis logros hoy
            </IonText>
            <div className="space-y-3">
              {todaysAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    😊
                  </div>
                  <IonText className="text-sm">{achievement}</IonText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </IonContent>

      <IonFooter>
        <div className="h-16 bg-white border-t flex justify-around items-center">
          <IonButton fill="clear" onClick={onNavigateToHome}>
            <IonIcon icon={home} />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToGoals}>
            <IonIcon icon={calendar} />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon icon={trophy} className="text-primary" />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToFriends}>
            <IonIcon icon={person} />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

