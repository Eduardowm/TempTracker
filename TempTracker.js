class TempTracker {
    constructor() {
        this.records = [];
        this.max = 0;
        this.min = 0;
        this.avg = 0;
        this.sum = 0;
    }

    insert(temperature) {
        this.records.push(temperature);

        if (temperature < this.min) {
            this.min = temperature;
        }

        if (temperature > this.max) {
            this.max = temperature;
        }

        this.sum += temperature;
        this.avg = this.sum / this.records.length;

        return this;
    }

    getMax() {
        return this.max;
    }

    getMin() {
        return this.min;
    }

    getAvg() {
        return this.avg;
    }

    getRecordsCount() {
        return this.records.length;
    }

    getReport() {
        return `Summary:
Records: ${this.getRecordsCount()}
Min:${this.getMin()}
Max: ${this.getMax()}
Avg:${this.getAvg()}`;
    }
}
