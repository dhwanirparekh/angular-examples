export class CounterService{
    
    activeToInactive: number =0;
    inactiveToActive: number =0;

    incrementActiveToInactive(){
        this.activeToInactive = this.activeToInactive + 1;
        console.log("Active to Inactive count is: " + this.activeToInactive);
    }

    incrementInactiveToActive(){
        this.inactiveToActive = this.inactiveToActive + 1;
        console.log("Inactive to Active count is: " + this.inactiveToActive);
    }

}