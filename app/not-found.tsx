import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <div className="text-9xl font-bold text-primary/20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 text-primary/40" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Page non trouvée</h1>
          <p className="text-muted-foreground mb-4">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#contact">
              Me contacter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}










