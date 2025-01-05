import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { FormList } from './FormList';
import { NewFormDialog } from './NewFormDialog';

export const FormBuilder: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Générateur de Formulaires</h1>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau Formulaire
        </Button>
      </div>

      <FormList />
      
      <NewFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};