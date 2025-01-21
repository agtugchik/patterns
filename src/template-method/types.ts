abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation();
    this.requiredOperations();
    this.hook();
  }
  protected baseOperation(): void {
    console.log("call base operation from abstract method");
  }
  protected abstract requiredOperations(): void;
  protected hook(): void {}
}

export { AbstractClass };
