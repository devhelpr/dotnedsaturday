(module
	(import "imports" "mem" (memory 1))
	(func $do
		(param $value i32)
		i32.const 0 		
		local.get $value
		i32.store
	)
	(export "do" (func $do))    
)