import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  create(createJobDto: CreateJobDto) {
    const job = new Job();
    job.name = createJobDto.name;
    job.address = createJobDto.address;
    job.email = createJobDto.email;
    job.telephone = createJobDto.telephone;
    return this.jobRepository.save(job);
  }

  findAll() {
    return this.jobRepository.find();
  }

  findOne(id: number) {
    return this.jobRepository.findOneBy({ id: id });
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return this.jobRepository.save({
      id: id,
      name: updateJobDto.name,
      email: updateJobDto.email,
      address: updateJobDto.address,
      telephone: updateJobDto.telephone,
    });
  }

  remove(id: number) {
    return this.jobRepository.delete(id);
  }
}
