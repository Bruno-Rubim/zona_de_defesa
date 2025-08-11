import { Controller, Get, Param } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
    @Get()
    findAlll(){
        return []
    }
    
    @Get(':id')
    findOne(@Param('id') id: string){
        return { id }
    }

}