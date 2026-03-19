package main

import (
	"fmt"

	"github.com/EeroLai/timeless-jewels-zh-tw/wasm/exposition"
)

func main() {
	exposition.Expose()
	fmt.Println("Calculator Initialized")
	select {}
}
