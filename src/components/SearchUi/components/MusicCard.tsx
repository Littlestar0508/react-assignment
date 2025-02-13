import { useEffect, useRef } from 'react';
import module from '../styles/MusicCardStyle.module.css';
import { type MusicArrayItem } from '../types';
import VanillaTilt, { TiltOptions } from 'vanilla-tilt';

interface MusicCardType {
  item: MusicArrayItem;
}

const tiltOptions: TiltOptions = {
  // 기울이는 방향을 반대로 변경
  reverse: false,
  // 최대 기울기 회전(도°)
  max: 30,
  // X축의 시작 기울기(도°)
  startX: 15,
  // Y축의 시작 기울기(도°)
  startY: 15,
  // 관점(perspective) 값이 낮을수록 기울기가 더 커짐
  perspective: 1000,
  // 스케일 ( 2 = 200%, 1.5 = 150% )
  scale: 1.3,
  // Enter/Exit 전환 속도
  speed: 1000,
  // Enter/Exit 시 전환 설정
  transition: true,
  // "x" 또는 "y" 축 활성화 설정 (`null`일 경우 양쪽 모두 활성화)
  axis: null,
  // 종료 시, 기울기 효과를 재설정
  reset: false,
  // 종료 재설정이 [0,0](기본값) 또는 [startX, startY]로 이동하는지 여부
  'reset-to-start': false,
  // Enter/Exit 시 사용되는 이징 함수
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  // "글레어(섬광)" 효과 설정
  glare: false,
  // 최대 "글레이" 불투명도 설정 (1 = 100%, 0.5 = 50%)
  'max-glare': 0.65,
  // false = VanillaTilt가 글레어 요소를 생성함
  // true = .js-tilt-glare > .js-tilt-glare-inner를 사용자가 직접 추가해야 함.
  'glare-prerender': false,
  // CSS 선택자 또는 HTML 요소 링크 마우스 이벤트 수신
  'mouse-event-element': undefined,
  // 장치 방향 감지 활성/비활성화
  gyroscope: true,
  // 장치 X축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 왼쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleX: -45,
  // 장치 X축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 오른쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleX: 45,
  // 장치 Y축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 위쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleY: -45,
  // 장치 Y축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 아래쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleY: 45,
};

export default function MusicCard({ item }: MusicCardType) {
  const iframeCode = item.iframe;

  const tiltRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;

    if (!tiltElement) {
      return;
    }

    VanillaTilt.init(tiltElement, tiltOptions);
  });

  return (
    <section className={module['music-card-container']} ref={tiltRef}>
      <button
        type="button"
        aria-label={`${item.title} 듣기`}
        style={{ cursor: 'pointer' }}
        popoverTarget={item.id}
      >
        <img className={module['album-cover']} src={item.src} alt="" />
      </button>
      <h3 className={module['song-title']}>{item.title}</h3>
      <p className={module['artist-name']}>{item.artist}</p>
      <div
        popover="auto"
        id={item.id}
        className={module['iframe-video']}
        dangerouslySetInnerHTML={{ __html: iframeCode }}
      />
    </section>
  );
}
