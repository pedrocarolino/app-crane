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
  historico = [];
  nomeOperador = null;
  eletroima = 0;

  async submitNew() {
    const registro = {
      altura: this.form.altura,
      angulo: this.form.angulo,
      eletroimaStatus: this.eletroima,
      nomeOperador: this.nomeOperador
    };
    const historico = {
      altura: this.form.altura,
      angulo: this.form.angulo,
      eletroimaStatus: this.eletroima,
      eletroima: 'Desativado'
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
    if (this.eletroima === 1) {
      historico.eletroima = 'Ativo';
    } else {
      historico.eletroima = 'Desativo';
    }
    if (flag === 1) {
      this.historico.push(historico);
      const response = await this.GuindasteService.saveRegister({registro});
    }
  }
  async getHistorico() {
    this.historico = await this.GuindasteService.getStatus();
  }

  async getStatus() {
    const response = await this.GuindasteService.getStatusLayout();
    this.form.angulo = response.angulo;
    this.form.altura = response.altura;
    this.eletroima = response.eletroima;
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
