class Meteor {
  constructor() {
    this.element = document.createElement('div');
    this.element.style.position = 'absolute';
    this.element.style.width = '2px';
    this.element.style.height = '80px';
    this.element.style.background = 'linear-gradient(transparent, #00f0ff)';
    this.element.style.transformOrigin = '0 0';
    this.element.style.zIndex = 1;
    this.reset();
    document.querySelector('.meteors').appendChild(this.element);
  }

  reset() {
    const startX = Math.random() * window.innerWidth;
    const startY = -100;
    const angle = Math.random() * 360;
    const duration = 6 + Math.random() * 4;
    this.element.style.left = `${startX}px`;
    this.element.style.top = `${startY}px`;
    this.element.style.transform = `rotate(${angle}deg)`;
    this.element.style.animation = `meteorFall ${duration}s linear`;
    this.element.style.opacity = 1;
    setTimeout(() => this.reset(), duration * 1000);
  }
}

// 创建多个流星
for (let i = 0; i < 5; i++) {
  new Meteor();
}

// 移除视差滚动相关代码
const style = document.createElement('style');
style.innerHTML = `
  @keyframes meteorFall {
    0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
    100% { transform: translateX(-800px) translateY(800px) rotate(45deg); opacity: 0; }
  }
`;
document.head.appendChild(style);