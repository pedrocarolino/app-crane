import {Component, OnInit} from '@angular/core';
import {GuindasteServService} from '../guindaste-serv.service';

@Component({
  selector: 'app-guindaste',
  templateUrl: './guindaste.component.html',
  styleUrls: ['./guindaste.component.css']
})
export class GuindasteComponent implements OnInit {

  constructor(public GuindasteService: GuindasteServService) {
  }
  title = 'app-guindaste';
  form = {
    altura: 0,
    angulo: 0
  };
  data = [];
  nomeOperador = null;
  eletroima = 0;
  getAngulo = 0;
  getAltura = 0;
  getEletroima = 0;

  async submitNew() {
    const registro = {
      altura: this.form.altura,
      angulo: this.form.angulo,
      eletroimaStatus: this.eletroima,
      nomeOperador: this.nomeOperador
    };
    let flag = 0;
    if (this.form.angulo >= -180 && this.form.angulo <= 180) {
      flag = 1;
      console.log('angulo valida');
    } else {
      flag = 0;
      alert('Angulo invalida');
    }
    if (this.form.altura >= 0 && this.form.altura <= 35) {
      flag = 1;
      console.log('Altura valida');
    } else {
      flag = 0;
      alert('Altura invalida');
    }
    if (this.nomeOperador === null) {
      flag = 0;
      alert('Insira seu nome');
    } else {
      flag = 1;
    }
    console.log(registro);
    if (flag === 1) {
      const response = await this.GuindasteService.saveRegister({registro});
    }
  }
  refreshAngulo(form) {
    this.getAngulo = form.angulo;
  }
  liga() {
    this.eletroima = 1;
  }

  desliga() {
    this.eletroima = 0;
  }

  async submitInicializar() {
    await console.log('Em desenvolvimento !!!');
  }
  ngOnInit(): void {
  }

}
