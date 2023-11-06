import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm/repository/Repository';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class ProductService {

  constructor(
  @InjectRepository(Product)
  private productRepo : Repository<Product>
  ) {}

async createProduct(product : CreateProductDto) {
  const newproduct = await this.productRepo.create(product)
  await this.productRepo.save(newproduct)
  return newproduct
}

async getProducts() {
  return this.productRepo.find()
}

async getProductById(id:string) {
  const product= await this.productRepo.findOneBy({id})

  if (product) {return product}

  throw new HttpException("not found", HttpStatus.NOT_FOUND)
  
}

async updateProductById(id:string, product : CreateProductDto) {

  await this.productRepo.update(id, product)

  const updatedproduct = await this.productRepo.findOneBy({id})

  if (updatedproduct) return updatedproduct

  throw new HttpException("not found", HttpStatus.NOT_FOUND)

}

async deleteProductById(id:string) {


  const deleteResponse = this.productRepo.delete({id})

  console.log('done')

  if  (!deleteResponse) {
    throw new HttpException("not found", HttpStatus.NOT_FOUND)
  }

  return "deleted"

}

}
