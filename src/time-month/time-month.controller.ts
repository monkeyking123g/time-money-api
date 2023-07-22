import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TimeMonthService } from "./time-month.service"
import { TimeMonthModule } from './time-month.module';

@Controller('time-day')
export class TimeDayController {
    constructor(private readonly timeMonthService: TimeMonthService) {}

    @Get('user/:owner_id')
    async getUserTimeDay(@Param('owner_id') owner_id: string) {
        return  this.timeMonthService.getTimeMonth(owner_id);     
    }
    @Get()
    async findAll() {
        return this.timeMonthService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.timeMonthService.findById(id);
    }

    @Post()
    async create(@Body() user: Partial<TimeMonthModule>) {
        return this.timeMonthService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() user: Partial<TimeMonthModule>) {
        return this.timeMonthService.update(id, user);
    }

    @Delete(':id')
        async delete(@Param('id') id: string) {
        return this. timeMonthService.delete(id);
    }

}