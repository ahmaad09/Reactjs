import React from "react";
import Button from "./Elemets/Button/Index"
import Input from "./Elemets/Input/Input";
import Label from "./Elemets/Input/label";
import Index from "./Elemets/Input/Index"
// React
import { motion } from "framer-motion"

import * as motion from "framer-motion/client"


function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-3">Login</h1>
        <p className="text-slate-500 font-medium mb-8">Welcome, Plase enter your details </p>
        <form action="" method="post">
          <Label>Email</Label>
          <Input placeholder="maasuakan emai" type="email" ></Input>
          <Button variant="bg-red-700 w-full">Login</Button>
        </form>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />
      </div>
    </div>
  );
}

export default App;