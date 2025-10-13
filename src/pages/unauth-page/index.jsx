function UnauthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">403</h1>
        <p className="text-muted-foreground text-lg">You don't have access to view this page</p>
      </div>
    </div>
  );
}

export default UnauthPage;
