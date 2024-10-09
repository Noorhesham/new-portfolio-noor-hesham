import React from "react";

const ModalSmall = () => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{btn}</DialogTrigger>
      <DialogContent className=" py-10 bg-slate-800 max-w-[90%] overflow-y-auto max-h-[80vh] w-full sm:rounded-[1.8rem]">
        <MaxWidthWrapper noPadding>{content}</MaxWidthWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ModalSmall;
