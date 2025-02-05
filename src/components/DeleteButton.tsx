import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"; // Assurez-vous que le chemin d'importation est correct
import { Button } from "@/components/ui/button"; // Assurez-vous que le chemin d'importation est correct

interface DeleteButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optionnel
  size?: "default" | "sm" | "lg" | "icon"; // Optionnel
  children: React.ReactNode; // Obligatoire
}

export function DeleteButton({ onClick, size = "default", children }: DeleteButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Empêche la propagation du clic
    setIsOpen(true); // Ouvre la boîte de dialogue
    if (onClick) onClick(e); // Appelle le gestionnaire `onClick` si fourni
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size={size} onClick={handleButtonClick}>
          {children}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setIsOpen(false)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}