import fs from 'fs';
import path from 'path';

const Sprite = () => {
  const spritePath = path.join(
    process.cwd(),
    'public',
    'images',
    'sprites.svg',
  );
  const spriteContent = fs.readFileSync(spritePath, 'utf8');

  return (
    <div
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: spriteContent }}
    />
  );
};

export default Sprite;
