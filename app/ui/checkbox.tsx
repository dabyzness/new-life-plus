import React, { useState } from "react";

interface CheckBoxProps {
  isComplete: boolean;
  onCheck: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export function CheckBox({ isComplete, onCheck }: CheckBoxProps) {
  console.log(isComplete);
  const [isChecked, setIsChecked] = useState<boolean>(isComplete);
  console.log("HAPPY", isChecked);

  function onChange() {
    // setIsChecked(!isChecked);
    console.log("HELLO");
  }

  return (
    <div>
      <input type="checkbox" onChange={onCheck} checked={isComplete} />
    </div>
  );
}
