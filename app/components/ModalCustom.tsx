"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ModalCustom = ({
  btn,
  content,
  title,
  desc,
  functionalbtn,
  span,
  cancelBtn = false,
  isOpen,
  btnText,
  isPending,
  btnStyles,
  form,
}: {
  btn: React.ReactNode;
  content: React.ReactNode;
  title?: string;
  desc?: string;
  functionalbtn?: React.ReactNode;
  span?: string;
  cancelBtn?: boolean;
  isOpen?: boolean;
  btnText?: string;
  isPending?: boolean;
  btnStyles?: boolean;
  form?: boolean;
}) => {
  const [open, setOpen] = React.useState(isOpen || false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{btn}</DialogTrigger>
      <DialogContent className="max-w-4xl py-10 overflow-y-auto max-h-[80vh] sm:rounded-[1.8rem]">
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default ModalCustom;
