import { makeAutoObservable, runInAction } from "mobx";
import { initPointsData } from "../initPointsData";

class PointsStore {
    points: number = 0;
    energy: number = 0
    pointOnTap: number = 1;
    maxEnergyOnTap: number = 10;
    maxEnergy: number = 600;
    energyRecoveryRate: number = 4;
    energyRecoveryInterval: number = 1000;// в миллисекундах
    lvl: number = 1;
    constructor() {
        makeAutoObservable(this);
        this.fetchData()
        this.startEnergyRecovery()
    }


    async fetchData() {
        try {
            //mockdata
            const data = await initPointsData()

            runInAction(() => {
                this.points = data.points
                this.energy = data.energy
                this.lvl = data.lvl
                this.pointOnTap = data.pointOnTap
            })


        } catch (e) {
            console.error(e)
        }
    }

    AddPoint(points: number) {
        this.points = this.points + points;
    }

    SubEnergy(newEnergy: number): boolean {
        if (newEnergy < 0) {
            return false
        }

        this.energy = newEnergy
        return true
    }

    getRandomEnergy(maxEnergy: number) {
        return Math.floor(Math.random() * (maxEnergy)) + 1
    }

    startEnergyRecovery() {
        setInterval(() => {
            runInAction(() => {
                if (this.energy < this.maxEnergy) {
                    this.energy = Math.min(this.energy + this.energyRecoveryRate, this.maxEnergy)
                }
            })
        }, this.energyRecoveryInterval)
    }

    get GetPoints() {
        return this.points
    }

    get GetPointOnTap() {
        return this.pointOnTap
    }

    get GetEnergy() {
        return this.energy
    }

}

const store = new PointsStore

export default store