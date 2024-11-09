import { makeAutoObservable, runInAction } from "mobx";
import { initPointsData } from "../initPointsData";

class PointsStore {
    points: number = 0;
    energy: number = 0;
    pointOnTap: number = 1;
    lvl: number = 1;
    constructor() {
        makeAutoObservable(this);
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

    get Point() {
        return this.points
    }

    get PointOnTap() {
        return this.pointOnTap
    }

}

const store = new PointsStore

export default store