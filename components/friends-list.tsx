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
  IonSearchbar,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import { home, calendar, person, chevronForward, add, trophy } from 'ionicons/icons';
import type { Friend } from '@/types/index';

interface FriendsListProps {
  friends: Friend[];
  onNavigateToHome: () => void;
  onNavigateToGoals: () => void;
  onNavigateToAchievements: () => void;
  onAddGoal: () => void;
}

export const FriendsList: React.FC<FriendsListProps> = ({
  friends,
  onNavigateToHome,
  onNavigateToGoals,
  onNavigateToAchievements,
  onAddGoal,
}) => {
  const suggestedFriends = [
    { id: 4, name: 'Belén Catala' },
    { id: 5, name: 'Martín Perez' },
    { id: 6, name: 'Fabri Colocini' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis amigos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="space-y-6">
          <IonSearchbar
            placeholder="Buscar"
            className="bg-gray-100 rounded-lg"
          />

          <div className="space-y-4">
            <IonText className="text-lg font-semibold block">
              Amigos ({friends.length})
            </IonText>
            
            <div className="space-y-2">
              {friends.map((friend) => (
                <div 
                  key={friend.id}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <IonText>{friend.name}</IonText>
                  </div>
                  <IonButton fill="clear" size="small">
                    Ver progreso
                    <IonIcon icon={chevronForward} slot="end" />
                  </IonButton>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <IonText className="text-lg font-semibold block">
              Agregar amigos
            </IonText>
            
            <div className="space-y-2">
              {suggestedFriends.map((friend) => (
                <div 
                  key={friend.id}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <IonText>{friend.name}</IonText>
                  </div>
                  <IonButton fill="clear" size="small">
                    <IonIcon icon={person} />
                  </IonButton>
                </div>
              ))}
            </div>
          </div>
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
          <IonButton fill="clear" onClick={onNavigateToGoals}>
            <IonIcon icon={calendar} />
          </IonButton>
          <IonButton fill="clear" onClick={onNavigateToAchievements}>
            <IonIcon icon={trophy} />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon icon={person} className="text-primary" />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

