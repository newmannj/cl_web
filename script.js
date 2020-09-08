//cl stuff
let commands = [];
let current_command = 0;

//tictactoe
let game_state = {
  board : [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']]
}

let do_command = (command) => {
  switch(command) {
    case "projects":
      console.log("got projects command");
      break;
    case "tictactoe":
      console.log("got tictactoe command");
      console.log(game_state.board);
      break;
    default:
      console.log("unknown command: " + command);
  }
  commands.push(command);
  current_command = commands.length;
}

let handle_command = (event) => {
  let el = document.getElementById("terminal-input");
  if(event.keyCode == 13) { // enter
    const command = el.value;
    if(el.value.length > 0) {
      do_command(command);
      el.value = "";
    }
  } else if(event.keyCode == 38) { // up arrow
    if(current_command != 0) {
      current_command -= 1;
      el.value = commands[current_command];
    }
  } else if(event.keyCode == 40) { // down arrow
    if(current_command != commands.length) {
      if(current_command == commands.length - 1) {
        el.value = "";
        current_command += 1;
      } else {
        current_command += 1;
        el.value = commands[current_command];
      }

    }
  } else {
    // console.log(event.keyCode);
  }
}
