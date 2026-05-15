"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
export default function PrintButton() {
    const handlePrint = () => {
        window.print()
    }

    return (
         <Button        
         onClick={handlePrint}                   
         className="bg-blue-400 cursor-pointer"                     
         size="lg"
        >
            Download Table PDF
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    )
}