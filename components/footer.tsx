export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">適</span>
            </div>
            <span className="font-semibold text-foreground">適正運賃診断</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 適正運賃診断サービス All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
