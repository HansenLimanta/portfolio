import React, { useRef, useEffect } from "react";
import {
  Bodies,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from "matter-js";
import { motion } from "framer-motion";
import { getRandomImage } from "./../utils/emojiPicker";
import styled from "@emotion/styled";
import Meta from "./../components/Meta";

function Playground() {
  const scene = useRef();
  const engine = useRef(Engine.create());

  useEffect(() => {
    // mount
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    // run the engine
    const runner = Runner.create();
    Render.run(render);
    Runner.run(runner, engine.current);
    engine.current.gravity.y = 0.1;

    // boundaries
    Composite.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.current.world, mouseConstraint);
    render.mouse = mouse;

    // unmount
    return () => {
      // destroy Matter
      Render.stop(render);
      Composite.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  const handleAddCircle = (e) => {
    const image = getRandomImage();
    const ball = Bodies.circle(
      Math.floor(Math.random() * e.view.innerWidth),
      Math.floor((Math.random() * e.view.innerHeight) / 2),
      34,
      {
        density: 0.0005,
        frictionAir: 0.0001,
        restitution: 0.9,
        friction: 0.0001,
        render: {
          sprite: {
            texture: image,
          },
        },
      }
    );

    Composite.add(engine.current.world, [ball]);
  };

  return (
    <>
      <Meta title="Playground | Hansen Limanta" />
      <PlayCont>
        <ButtonCont>
          <Text>Fill your day with expression!</Text>

          <ClickButton
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddCircle}
          >
            Add Emoji
          </ClickButton>
        </ButtonCont>
        <Canvas ref={scene} />
      </PlayCont>
    </>
  );
}

const PlayCont = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #fff;
`;
const Canvas = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;
const ButtonCont = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;
const Text = styled.h1`
  font-size: 60px;
  margin-bottom: 1rem;
  pointer-events: none;
  user-select: none;
  text-align: center;
  padding: 0 1rem;
  @media (max-width: 1000px) {
    font-size: 42px;
  }
  @media (max-width: 800px) {
    font-size: 36px;
  }
  @media (max-width: 520px) {
    font-size: 24px;
  }
`;
const ClickButton = styled(motion.div)`
  border-radius: 8px;
  padding: 8px;
  border: 2px solid #ff9078;
  background-color: #ff5733;
  color: #fff;
  cursor: pointer;
  user-select: none;
  pointer-events: auto;
`;

export default Playground;
