/*!
 * VETEC Hero — depth-sliced 3D tilt hero with clickable markers
 * Vanilla JS, no dependencies. Usage: <section class="vh" data-vetec-hero> … </section>
 */
(function () {
  'use strict';

  /* ---------------- configuration ---------------- */
  var DEFAULTS = {
    tiltX: 10,        // max total horizontal tilt in degrees (±5°)
    tiltY: 6.4,       // max total vertical tilt in degrees (±3.2°)
    ease: 0.045,      // follow smoothing (0–1, lower = slower)
    zoom: 1.07,       // extra scale so tilting never shows an edge
    assets: 'assets/' // folder holding the layer images
  };

  // Marker anchors are on the 1920×1080 design stage (surface point the stem touches).
  // Copy follows the "제품의 세 가지 뿌리" section of /company.
  // side: 'left' | 'right' | 'up' — the direction the card opens (chosen so no card covers another pin).
  var MARKERS = [
    { id: 'comp', x: 432, y: 735, stem: 60, side: 'right',
      label: '산업 현장 · 30년', tag: 'EXPERIENCE',
      title: '30년의 노하우로 두 방식을 지원합니다', en: '*템플릿 예시 : 에너지경영시스템',
      desc: '기존 시스템 위에 얹는 것도, 없는 현장을 새로 세우는 것도 가능합니다. 신규 구축도 30년 경험으로 만든 템플릿에서 시작합니다.' },
    { id: 'pump', x: 1078, y: 697, stem: 80, side: 'right',
      label: '진동 센서 · 데이터', tag: 'TECHNOLOGY',
      title: '시계열을 넘어 AI 판단까지 잇습니다', en: '센서 · 설비 · 문서 · 이력을 온톨로지로 연결',
      desc: '센서 시계열뿐 아니라 설비 · 문서 · 이력까지 엮고, 그 위에서 AI 에이전트가 근거를 들어 의사결정을 돕습니다.' },
    { id: 'motor', x: 1461, y: 754, stem: 60, side: 'right',
      label: '산업 현장 · 엔지니어', tag: 'PEOPLE',
      title: '현장을 겪은 사람들이 제품을 설계합니다', en: '발전 · 제조 · 에너지 현장 엔지니어와 개발자가 한 팀',
      desc: '설비가 어떻게 멈추고 운전자가 무엇을 보고 판단하는지, 겪어 본 사람들이 제품을 설계합니다.' }
  ];

  var STAGE_W = 1920, STAGE_H = 1080;
  var BOX = 2016 / 1920; // image layers bleed 5% past the stage

  var ICON_PLUS = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 3v12M3 9h12"/></svg>';
  var ICON_X = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>';
  var ICON_ARROW = '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function layer(src, cls, alt) {
    return '<img class="vh-layer ' + cls + '" src="' + src + '" alt="' + (alt || '') + '"' +
      (alt ? '' : ' aria-hidden="true"') + ' decoding="async" draggable="false">';
  }

  function sceneHTML(a, uid) {
    var flow = function (src) {
      return layer(src, 'vh-flow') + layer(src, 'vh-flow vh-flow--slow');
    };
    var markers = MARKERS.map(function (m, i) {
      var cardId = uid + '-' + m.id;
      return '' +
        '<div class="vh-marker vh-marker--' + m.side + '" data-id="' + m.id + '" style="left:' + (m.x * BOX).toFixed(1) + 'px;top:' + (m.y * BOX).toFixed(1) + 'px;' +
          '--stem:' + m.stem + 'px;--d1:' + (0.9 + i * 0.22) + 's;--d2:' + (1.3 + i * 0.22) + 's;--d3:' + (2 + i * 0.4) + 's">' +
          '<span class="vh-stem"></span><span class="vh-dot"></span>' +
          '<div class="vh-head">' +
            '<button type="button" class="vh-pin" aria-expanded="false" aria-controls="' + cardId + '" aria-label="' + esc(m.label) + ' 정보 열기">' + ICON_PLUS + '</button>' +
            '<div class="vh-card" id="' + cardId + '" role="region" aria-label="' + esc(m.title) + '" hidden>' +
              '<div class="vh-card__top"><span class="vh-card__tag">' + esc(m.tag) + '</span>' +
                '<button type="button" class="vh-card__close" aria-label="닫기">' + ICON_X + '</button></div>' +
              '<div><div class="vh-card__label">' + esc(m.label) + '</div>' +
                '<h3 class="vh-card__title">' + esc(m.title) + '</h3>' +
                '<div class="vh-card__en">' + esc(m.en) + '</div></div>' +
              '<p class="vh-card__desc">' + esc(m.desc) + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
    }).join('');

    return '' +
      '<div class="vh-stage" aria-hidden="false">' +
        '<div class="vh-scene">' +
          '<div class="vh-slice vh-slice--far">' + layer(a + 'far.webp', 'vh-fade') + '</div>' +
          '<div class="vh-slice vh-slice--mid">' + layer(a + 'mid.webp', 'vh-fade') + '</div>' +
          '<div class="vh-slice vh-slice--near">' +
            layer(a + 'near.webp', 'vh-fade', '공기압축기, 에어 리시버 탱크, 펌프·모터 스키드가 산악 지형 위 현장에 놓인 디지털 트윈 그래픽') +
            layer(a + 'near-contour.webp', 'vh-contour vh-fade') +
            layer(a + 'near-glow.webp', 'vh-glow') + flow(a + 'near-glow.webp') +
          '</div>' +
          '<div class="vh-slice vh-slice--fg">' +
            layer(a + 'fg.webp', 'vh-fade') +
            layer(a + 'fg-contour.webp', 'vh-contour vh-fade') +
            layer(a + 'fg-glow.webp', 'vh-glow') + flow(a + 'fg-glow.webp') +
          '</div>' +
          '<div class="vh-slice vh-slice--ui"><div class="vh-layer vh-markers">' + markers + '</div></div>' +
        '</div>' +
      '</div>';
  }

  function Hero(root) {
    var opt = {};
    Object.keys(DEFAULTS).forEach(function (k) {
      var v = root.getAttribute('data-' + k.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); }));
      opt[k] = v == null ? DEFAULTS[k] : (typeof DEFAULTS[k] === 'number' ? parseFloat(v) : v);
    });
    this.opt = opt;
    this.root = root;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    this.tx = this.ty = this.cx = this.cy = 0;
    this.raf = 0;
    this.pinned = null; this.preview = null; this.enterT = 0; this.leaveT = 0;

    root.classList.remove('no-js');
    root.insertAdjacentHTML('afterbegin', sceneHTML(opt.assets, 'vh' + Math.random().toString(36).slice(2, 7)));
    this.stage = root.querySelector('.vh-stage');
    this.scene = root.querySelector('.vh-scene');
    this.scene.style.transform = 'scale(' + opt.zoom + ')';

    this.fit();
    this.bind();
  }

  Hero.prototype.fit = function () {
    var r = this.root.getBoundingClientRect();
    var s = Math.max(r.width / STAGE_W, r.height / STAGE_H);   // cover
    var ui = Math.min(2.2, Math.max(1, 0.9 / s));             // keep pins/cards readable on small screens
    this.root.style.setProperty('--vh-s', s.toFixed(4));
    this.root.style.setProperty('--vh-ui', ui.toFixed(3));
  };

  Hero.prototype.tick = function () {
    var e = this.opt.ease;
    this.cx += (this.tx - this.cx) * e;
    this.cy += (this.ty - this.cy) * e;
    this.scene.style.transform = 'scale(' + this.opt.zoom + ') rotateX(' + (this.cy * this.opt.tiltY).toFixed(3) +
      'deg) rotateY(' + (-this.cx * this.opt.tiltX).toFixed(3) + 'deg)';
    var self = this;
    if (Math.abs(this.tx - this.cx) + Math.abs(this.ty - this.cy) > 0.0005) {
      this.raf = requestAnimationFrame(function () { self.tick(); });
    } else {
      this.raf = 0;
    }
  };

  Hero.prototype.kick = function () {
    var self = this;
    if (!this.raf && !this.reduced) this.raf = requestAnimationFrame(function () { self.tick(); });
  };

  /* Card state: `pinned` (opened by click/tap, stays open) and `preview` (opened by hover, closes on leave).
     The visible card is the pinned one if any, otherwise the hovered one. */
  Hero.prototype.sync = function () {
    var showId = this.pinned || this.preview;
    var ms = this.root.querySelectorAll('.vh-marker');
    for (var i = 0; i < ms.length; i++) {
      var m = ms[i], on = m.getAttribute('data-id') === showId;
      var pin = m.querySelector('.vh-pin'), card = m.querySelector('.vh-card');
      m.classList.toggle('is-open', on);
      m.classList.toggle('is-pinned', on && this.pinned === showId);
      card.hidden = !on;
      if (on) this.fitCard(m); else m.classList.remove('flip-down', 'flip-x');
      var pinned = this.pinned === m.getAttribute('data-id');
      pin.setAttribute('aria-expanded', pinned ? 'true' : 'false');
      pin.setAttribute('aria-label', pin.getAttribute('aria-label').replace(/ 정보 (열기|닫기)$/, pinned ? ' 정보 닫기' : ' 정보 열기'));
    }
  };

  // keep an open card inside the hero: flip vertically / horizontally if it would overflow
  Hero.prototype.fitCard = function (m) {
    m.classList.remove('flip-down', 'flip-x');
    var card = m.querySelector('.vh-card');
    var r = card.getBoundingClientRect(), R = this.root.getBoundingClientRect(), pad = 8;
    if (r.top < R.top + pad) m.classList.add('flip-down');
    if (r.left < R.left + pad || r.right > R.right - pad) {
      m.classList.add('flip-x');
      var r2 = card.getBoundingClientRect();
      if (r2.left < R.left + pad || r2.right > R.right - pad) m.classList.remove('flip-x');
    }
  };

  Hero.prototype.close = function (focusPin) {
    var id = this.pinned || this.preview;
    this.pinned = null; this.preview = null;
    this.sync();
    if (focusPin && id) {
      var pin = this.root.querySelector('.vh-marker[data-id="' + id + '"] .vh-pin');
      if (pin) pin.focus();
    }
  };

  Hero.prototype.toggle = function (id) {
    this.pinned = this.pinned === id ? null : id;
    this.preview = null;
    this.sync();
  };

  Hero.prototype.hoverIn = function (id) {
    var self = this;
    clearTimeout(this.leaveT);
    if (this.pinned) return;                      // a pinned card stays put
    if (this.preview === id) return;
    clearTimeout(this.enterT);
    this.enterT = setTimeout(function () { self.preview = id; self.sync(); }, this.preview ? 0 : 150);
  };

  Hero.prototype.hoverOut = function () {
    var self = this;
    clearTimeout(this.enterT);
    if (!this.preview) return;
    clearTimeout(this.leaveT);
    this.leaveT = setTimeout(function () { self.preview = null; self.sync(); }, 220); // grace to reach the card
  };

  Hero.prototype.bind = function () {
    var self = this, root = this.root;

    // scale to the section
    if ('ResizeObserver' in window) new ResizeObserver(function () { self.fit(); }).observe(root);
    else window.addEventListener('resize', function () { self.fit(); });

    // start the intro when the hero scrolls into view
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { root.classList.add('is-ready'); io.disconnect(); } });
      }, { threshold: 0.2 });
      io.observe(root);
    } else {
      root.classList.add('is-ready');
    }

    // viewpoint follows the pointer (mouse / trackpad only).
    // Listen on the document, not the hero: pages often put text/buttons over the hero or set
    // `pointer-events: none` on it, which would stop the hero from ever seeing the mouse.
    if (this.canHover && !this.reduced) {
      var inside = false;
      document.addEventListener('pointermove', function (e) {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        var r = root.getBoundingClientRect();
        if (!r.width) return;
        var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
          inside = true;
          self.tx = x - 0.5; self.ty = y - 0.5;
          self.kick();
        } else if (inside) {
          inside = false;
          self.tx = 0; self.ty = 0;
          self.kick();
        }
      }, { passive: true });
      document.addEventListener('pointerleave', function () { inside = false; self.tx = 0; self.ty = 0; self.kick(); });
    }

    // hover preview (mouse / trackpad only)
    if (this.canHover) {
      var heads = root.querySelectorAll('.vh-head');
      for (var i = 0; i < heads.length; i++) {
        (function (head) {
          var id = head.parentNode.getAttribute('data-id');
          head.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') self.hoverIn(id); });
          head.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') self.hoverOut(); });
        })(heads[i]);
      }
    }

    // click / tap pins the card; click again, ×, outside or Esc closes it
    root.addEventListener('click', function (e) {
      if (e.target.closest('.vh-card__close')) { self.close(true); return; }
      var pin = e.target.closest('.vh-pin');
      if (pin) { self.toggle(pin.closest('.vh-marker').getAttribute('data-id')); return; }
      if (!e.target.closest('.vh-card')) self.close(false);
    });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') self.close(true);
    });
  };

  function init() {
    var nodes = document.querySelectorAll('[data-vetec-hero]');
    for (var i = 0; i < nodes.length; i++) {
      if (!nodes[i].__vh) nodes[i].__vh = new Hero(nodes[i]);
    }
  }

  window.VetecHero = { init: init, markers: MARKERS };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
