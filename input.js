let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
//   const handleUserInput = function(key) {
//     if (key === "\u0003") {
//       process.exit();
//     }
//   };

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  } else {
    if (key === "w") {
      console.log("up");
      connection.write("Move: up")
    }
    if (key === "a") {
      console.log("left"); connection.write("Move: left")
    }
    if (key === "s") {
      console.log("down"); connection.write("Move: down")
    }
    if (key === "d") {
      console.log("right"); connection.write("Move: right")
    }
  }
};

module.exports = { setupInput };