import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-loader',
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule],
    template: `
        <div class="loader-container" [class.overlay]="overlay">
            <mat-spinner [diameter]="diameter" [color]="color"></mat-spinner>
            <p *ngIf="message" class="loading-text">{{message}}</p>
        </div>
    `,
    styles: [`
        .loader-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.7);
            z-index: 1000;
        }

        .loading-text {
            margin-top: 10px;
            color: #666;
            font-size: 14px;
        }
    `]
})
export class LoaderComponent {
    @Input() diameter: number = 40;
    @Input() overlay: boolean = false;
    @Input() message?: string;
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}
