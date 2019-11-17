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
  nomeOperador = null;
  eletroima = 0;
  getAngulo = null;
  getAltura = null;
  getEletroima = null;

  async submitNew() {
    const registro = {
      altura: this.form.altura + 32,
      angulo: this.form.angulo + 180,
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
    if (registro.altura >= 0 && registro.altura <= 35) {
      flag = 1;
      console.log('altura valida');
    } else {
      flag = 0;
      alert('Altura invalida');
    }
    console.log(registro);
    if (flag === 1) {
      const response = await this.GuindasteService.saveRegister({registro});
    }
  }
  liga() {
    this.eletroima = 1;
  }

  desliga() {
    this.eletroima = 0;
  }
  async submitInicializar() {
    console.log('Em desenvolvimento !!!');
  }
  async submitAngulo() {
    try {
      const angulo = this.form.angulo + 180;
      const response = await this.GuindasteService.saveAngulo({angulo});
    } catch (e) {
      console.log('Nao foi possivel enviar o angulo, por causa do erro: ', e);
    }
  }
  async submitAltura() {
    try {
      const altura = this.form.altura;
      const response = await this.GuindasteService.saveAltura({altura});
    } catch (e) {
      console.log('Nao foi possivel enviar a altura , por causa do erro: ', e);
    }
  }
  ngOnInit(): void {
  }

}
