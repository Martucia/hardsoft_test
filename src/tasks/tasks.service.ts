import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async create(dto: CreateTaskDto) {
    const newTask = this.tasksRepository.create({
      ...dto,
    });

    return this.tasksRepository.save(newTask);
  }

  findAll() {
    return this.tasksRepository.find({});
  }

  async update(id: number, dto: UpdateTaskDto) {
    const task = await this.tasksRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException('No task with this id was found');
    }

    return this.tasksRepository.save({ ...task, ...dto });
  }

  async remove(id: number) {
    const task = await this.tasksRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException('No task with this id was found');
    }

    try {
      await this.tasksRepository.remove(task);

      return;
    } catch {
      throw new InternalServerErrorException('Error while removing the task');
    }
  }
}
