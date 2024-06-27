import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, div, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


export function AddTodo() {

  const [task,setTask]=useState('')
  const [description,setDescription]=useState('')

  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault()
    console.log(task,description);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you went to be finish.
          </DialogDescription>
        </DialogHeader>
       <form action="" onSubmit={handleSubmit}>
       <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              id="task"
              name="task"
              className="col-span-3"
              onBlur={(e)=>setTask(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              name="desription"
              className="col-span-3"
              onBlur={(e)=>setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end">
        <DialogClose asChild>
            <Button type="submit" >
              Submit
            </Button>
          </DialogClose>
        </div>
       </form>
      </DialogContent>
    </Dialog>
  )
}

