import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSignal = signal<boolean>(false);
  
  constructor() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    const isDarkMode = savedTheme ? savedTheme === 'true' : prefersDark;
    this.darkModeSignal.set(isDarkMode);
    
    // Apply theme to body element
    effect(() => {
      const isDark = this.darkModeSignal();
      if (isDark) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      // Save preference to localStorage
      localStorage.setItem('darkMode', isDark.toString());
    });
  }
  
  isDarkMode() {
    return this.darkModeSignal();
  }
  
  toggleDarkMode() {
    this.darkModeSignal.update(value => !value);
  }
  
  setDarkMode(value: boolean) {
    this.darkModeSignal.set(value);
  }
}
