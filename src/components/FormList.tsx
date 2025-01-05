import React from 'react';
import { useFormStore } from '@/store/formStore';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

export const FormList: React.FC = () => {
  const forms = useFormStore((state) => state.forms);
  const deleteForm = useFormStore((state) => state.deleteForm);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Mes Formulaires</h2>
      {forms.length === 0 ? (
        <p className="text-slate-500">Aucun formulaire créé pour le moment.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {forms.map((form) => (
            <div
              key={form.id}
              className="rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{form.title}</h3>
                  <p className="text-sm text-slate-500">{form.description}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteForm(form.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
              <div className="text-sm text-slate-500">
                {form.fields.length} champ(s)
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};