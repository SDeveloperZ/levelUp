import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput,
  IonTextarea,
  IonFooter,
} from '@ionic/react';
import { close, home, calendar, person, calendarOutline } from 'ionicons/icons';

interface NewGoal {
  title: string;
  description: string;
  endDate: string;
}

export const AddGoalModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: (goal: NewGoal) => void;
}> = ({ onClose, onSave }) => {
  const [goal, setGoal] = useState<NewGoal>({
    title: '',
    description: '',
    endDate: '',
  });

  const handleSave = () => {
    onSave(goal);
    onClose();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="px-4">
          <IonTitle size="small">Mis Metas</IonTitle>
          <IonButton slot="end" fill="clear" onClick={onClose}>
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Agregar Meta</h2>

          <div className="space-y-4">
            <div>
              <div className="text-sm mb-1">Título</div>
              <div className="bg-gray-100 rounded-md">
                <IonInput
                  value={goal.title}
                  onIonChange={e => setGoal({...goal, title: e.detail.value!})}
                  className="h-12"
                />
              </div>
            </div>

            <div>
              <div className="text-sm mb-1">Descripción</div>
              <div className="bg-gray-100 rounded-md">
                <IonTextarea
                  value={goal.description}
                  onIonChange={e => setGoal({...goal, description: e.detail.value!})}
                  className="h-32"
                />
              </div>
            </div>

            <div>
              <div className="text-sm mb-1">Fecha de Fin</div>
              <div className="bg-gray-100 rounded-md relative">
                <IonInput
                  type="date"
                  value={goal.endDate}
                  onIonChange={e => setGoal({...goal, endDate: e.detail.value!})}
                  className="h-12"
                />
                <IonIcon 
                  icon={calendarOutline} 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <IonButton 
              expand="block" 
              onClick={handleSave}
              className="h-12 mt-4"
              style={{ '--background': '#E5E7EB', '--color': '#000' }}
            >
              Guardar
            </IonButton>
          </div>
        </div>
      </IonContent>

      <IonFooter>
        <div className="h-16 bg-white border-t flex justify-around items-center">
          <IonButton fill="clear">
            <IonIcon icon={home} />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon icon={calendar} />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon icon={person} />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

