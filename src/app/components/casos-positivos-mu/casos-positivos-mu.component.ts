import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-casos-positivos-mu',
  templateUrl: './casos-positivos-mu.component.html',
  styleUrls: ['./casos-positivos-mu.component.css']
})

export class CasosPositivosMuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let timerInterval
    Swal.fire({
      title: ' Módulo aún no disponible !!',
      html: 'Estamos trabajando en el...',
      timer: 3000,
      timerProgressBar: true,
      willOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {

        this.router.navigate(['/dashboard'])

        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }



}
