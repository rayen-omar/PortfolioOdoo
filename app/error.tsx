"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Une erreur est survenue</h1>
          <p className="text-muted-foreground mb-4">
            Désolé, quelque chose s'est mal passé. Veuillez réessayer.
          </p>
          {error.message && (
            <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-lg">
              {error.message}
            </p>
          )}
        </div>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Réessayer
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}



