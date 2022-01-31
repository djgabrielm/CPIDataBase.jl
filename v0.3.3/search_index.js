var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = CPIDataBase","category":"page"},{"location":"#CPIDataBase","page":"Home","title":"CPIDataBase","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for CPIDataBase.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [CPIDataBase]","category":"page"},{"location":"#CPIDataBase.CPIDataBase","page":"Home","title":"CPIDataBase.CPIDataBase","text":"CPIDataBase\n\nLibrería base para tipos y funcionalidad básica para manejo de los datos desagregados del IPC a nivel de república. \n\n\n\n\n\n","category":"module"},{"location":"#CPIDataBase.CPIIndex","page":"Home","title":"CPIDataBase.CPIIndex","text":"Tipo concreto único para obtener el índice de una función de inflación\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.CPIResult","page":"Home","title":"CPIDataBase.CPIResult","text":"Tipo abstracto para manejar el despacho de las funciones de inflación\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.CPIVarInterm","page":"Home","title":"CPIDataBase.CPIVarInterm","text":"Tipo concreto único para obtener la variación intermensual de una función de inflación\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.CombinationFunction","page":"Home","title":"CPIDataBase.CombinationFunction","text":"CombinationFunction{N, W} <: EnsembleInflationFunction <: InflationFunction\n\nCombinationFunction(ensemble, weights [, name])\nCombinationFunction(inflfn1, inflfn2 [, ...], weights [, name])\n\nFunción de inflación para computar un promedio ponderado de un conjunto de N de medidas de inflación con tipo del vector de ponderaciones W.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.CountryStructure","page":"Home","title":"CPIDataBase.CountryStructure","text":"CountryStructure{N, T <: AbstractFloat}\n\nTipo abstracto que representa el conjunto de bases del IPC de un país.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.EnsembleFunction","page":"Home","title":"CPIDataBase.EnsembleFunction","text":"EnsembleFunction{N} <: EnsembleInflationFunction\n\nEnsembleFunction(inflfn1, inflfn2 [, ...])\n\nFunción de inflación para computar un conjunto de N de medidas de inflación simultáneamente utilizando las funciones inflfn1, inflfn2, ....\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.EnsembleInflationFunction","page":"Home","title":"CPIDataBase.EnsembleInflationFunction","text":"EnsembleInflationFunction <: InflationFunction <: InflationFunction\n\nTipo abstracto para conformar conjuntos de medidas de inflación\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.FullCPIBase","page":"Home","title":"CPIDataBase.FullCPIBase","text":"FullCPIBase{T, B} <: AbstractCPIBase{T}\n\nFullCPIBase(ipc::Matrix{T}, v::Matrix{T}, w::Vector{T}, dates::DATETYPE, baseindex::B) where {T, B}\n\nContenedor completo para datos del IPC de un país. Se representa por:\n\nMatriz de índices de precios ipc que incluye la fila con los índices del número base. \nMatriz de variaciones intermensuales v. En las filas contiene los períodos y en las columnas contiene los gastos básicos.\nVector de ponderaciones w de los gastos básicos.\nFechas correspondientes dates (por meses).\nÍndices base baseindex. \n\nEl tipo T representa el tipo de datos para representar los valores de punto flotante. El tipo B representa el tipo del campo baseindex; por ejemplo, Float32 o Vector{Float32}.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.FullCPIBase-Tuple{DataFrames.DataFrame, DataFrames.DataFrame}","page":"Home","title":"CPIDataBase.FullCPIBase","text":"FullCPIBase(df::DataFrame, gb::DataFrame)\n\nEste método constructor devuelve una estructura FullCPIBase a partir de los DataFrames de índices de precios df y de descripción de los gastos básicos gb. \n\nEl DataFrame df posee la siguiente estructura: \nContiene en la primera columna las fechas o períodos de los datos. En las siguientes columnas, debe contener los códigos de cada una de las categorías o gastos básicos de la estructura del IPC, junto con la serie de tiempo con los índices de precios individuales. \nEn las filas del DataFrame contiene los períodos por meses. La primera fila del DataFrame se utiliza para obtener el índice base. Si el valor es el mismo para todos los gastos básicos, se tomará únicamente este valor escalar (por ejemplo 100.0 como un Float64). En algunos casos, es posible que no se disponga de la información completa, por lo que los índices base podrían ser diferentes entre sí. En este caso, baseindex almacenará el vector de índices base originales. \nUn ejemplo de cómo puede verse este DataFrame es el siguiente: \n\n121×219 DataFrame\n Row │ Date         _011111  _011121  _011131  _011141  _011142  _011151  _011152 ⋯\n     │ Date         Float64  Float64  Float64  Float64  Float64  Float64  Float64 ⋯\n─────┼─────────────────────────────────────────────────────────────────────────────\n   1 │ 2000-12-01   100.0    100.0    100.0    100.0    100.0    100.0    100.0   ⋯\n   2 │ 2001-01-01   100.55   103.23   101.66   106.47   100.36   100.0    102.57   \n   3 │ 2001-02-01   101.47   104.82   102.73   108.38   101.37   100.0    103.35   \n   4 │ 2001-03-01   101.44   107.74   104.9    103.76   101.32   100.0    104.27   \n   5 │ 2001-04-01   101.91   107.28   106.19   107.83   101.82   100.0    104.73  ⋯\n   6 │ 2001-05-01   102.77   106.12   106.9    109.16   101.81   100.0    105.21   \n   7 │ 2001-06-01   103.23   109.04   107.4    112.13   102.72   100.0    105.47   \n   8 │ 2001-07-01   104.35   112.72   107.96   117.19   105.09   100.0    105.66   \n  ⋮  │     ⋮          ⋮        ⋮        ⋮        ⋮        ⋮        ⋮        ⋮     ⋱\n 114 │ 2010-05-01   218.45   501.39   200.28   477.5    179.0    215.0    164.16  ⋯\n 115 │ 2010-06-01   219.28   503.35   203.88   476.26   180.94   214.02   164.97   \n 116 │ 2010-07-01   219.1    503.78   205.19   478.34   181.78   217.6    165.9    \n 117 │ 2010-08-01   218.52   507.45   206.87   486.72   181.51   223.76   166.46   \n 118 │ 2010-09-01   218.9    505.8    206.45   501.23   182.04   228.34   166.04  ⋯\n 119 │ 2010-10-01   219.51   504.41   205.78   504.4    182.35   221.98   166.3    \n 120 │ 2010-11-01   219.11   509.63   205.41   502.88   182.16   217.01   166.34   \n 121 │ 2010-12-01   218.79   511.38   205.09   506.04   182.14   218.63   165.99   \n                                                   211 columns and 105 rows omitted\n\nEl DataFrame gb posee la siguiente estructura: \nLa primera columna contiene los códigos de las columnas del DataFrame df. \nLa segunda columna contiene el nombre o la descripción de cada una de las categorías en las columnas de df. \nY finalmente, la tercer columna, debe contener las ponderaciones asociadas a cada una de las categorías o gastos básicos de las columnas de df.\nLos nombres de las columnas no son tomados en cuenta, solamente el orden y los tipos.\nUn ejemplo de cómo puede verse este DataFrame es el siguiente: \n\n218×3 DataFrame\n Row │ Code     GoodOrService                       Weight\n     │ String   String                              Float64     \n─────┼────────────────────────────────────────────────────────\n   1 │ _011111  Arroz                               0.483952\n   2 │ _011121  Pan                                 2.82638\n   3 │ _011131  Pastas frescas y secas              0.341395\n   4 │ _011141  Productos de tortillería            1.69133\n  ⋮  │   ⋮                     ⋮                     ⋮\n 216 │ _093111  Gastos por seguros                  0.236691\n 217 │ _093121  Gastos por servicios funerarios     0.289885\n 218 │ _094111  Gastos por servicios diversos pa…   0.151793\n                                              211 rows omitted\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.IndexCPIBase","page":"Home","title":"CPIDataBase.IndexCPIBase","text":"IndexCPIBase{T, B} <: AbstractCPIBase{T}\n\nContenedor genérico de índices de precios del IPC de un país. Se representa por:\n\nMatriz de índices de precios ipc que incluye la fila con los índices del númbero base. \nVector de ponderaciones w de los gastos básicos.\nFechas correspondientes dates (por meses).\nÍndices base baseindex. \n\nEl tipo T representa el tipo de datos para representar los valores de punto flotante. El tipo B representa el tipo del campo baseindex; por ejemplo, Float32 o Vector{Float32}.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.IndexCPIBase-Tuple{DataFrames.DataFrame, DataFrames.DataFrame}","page":"Home","title":"CPIDataBase.IndexCPIBase","text":"IndexCPIBase(df::DataFrame, gb::DataFrame)\n\nEste constructor devuelve una estructura IndexCPIBase a partir del DataFrame  de índices de precios df, que contiene en las columnas las categorías o gastos  básicos del IPC y en las filas los períodos por meses. Las ponderaciones se obtienen  de la estructura gb, en la tercera columna de ponderaciones.\n\nPara conocer la estructura de los DataFrames necesarios, vea también: FullCPIBase.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.InflationCombination","page":"Home","title":"CPIDataBase.InflationCombination","text":"InflationCombination <: EnsembleInflationFunction <: InflationFunction\n\nAlias para CombinationFunction.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.InflationEnsemble","page":"Home","title":"CPIDataBase.InflationEnsemble","text":"InflationEnsemble <: EnsembleInflationFunction <: InflationFunction\n\nAlias para EnsembleFunction.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.InflationFunction","page":"Home","title":"CPIDataBase.InflationFunction","text":"abstract type InflationFunction <: Function\n\nTipo abstracto para representar las funciones de inflación que operan sobre CountryStructure y VarCPIBase. Permiten computar la medida de ritmo inflacionario interanual, el índice de precios dado por la metodología y las variaciones intermensuales del índice de precios.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.MixedCountryStructure","page":"Home","title":"CPIDataBase.MixedCountryStructure","text":"MixedCountryStructure{N, T} <: CountryStructure{N, T}\n\nEstructura que representa el conjunto de bases del IPC de un país,  posee el campo base, que es una tupla de la estructura VarCPIBase, cada una  con su propio tipo de índices base B. Este tipo es una colección de un tipo abstracto.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.UniformCountryStructure","page":"Home","title":"CPIDataBase.UniformCountryStructure","text":"UniformCountryStructure{N, T, B} <: CountryStructure{N, T}\n\nEstructura que representa el conjunto de bases del IPC de un país,  posee el campo base, que es una tupla de la estructura VarCPIBase. Todas las bases deben tener el mismo tipo de índice base.\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.VarCPIBase","page":"Home","title":"CPIDataBase.VarCPIBase","text":"VarCPIBase{T, B} <: AbstractCPIBase{T}\n\nVarCPIBase(v::Matrix{T}, w::Vector{T}, dates::DATETYPE, baseindex::B) where {T, B}\n\nContenedor genérico para de variaciones intermensuales de índices de precios del IPC de un país. Se representa por:\n\nMatriz de variaciones intermensuales v. En las filas contiene los períodos y en las columnas contiene los gastos básicos.\nVector de ponderaciones w de los gastos básicos.\nFechas correspondientes dates (por meses).\nÍndices base baseindex. \n\nEste tipo es el utilizado en el contenedor de bases del IPC de un país, denominado CountryStructure, ya que con los datos de un VarCPIBase es suficiente para computar cualquier medida de inflación basada en índices de precios individuales o en un estadístico de resumen de las variaciones intermensuales (como un percentil, o una media truncada).\n\nEl tipo T representa el tipo de datos para representar los valores de punto flotante. El tipo B representa el tipo del campo baseindex; por ejemplo, Float32 o Vector{Float32}.\n\nVer también: CountryStructure, UniformCountryStructure, MixedCountryStructure\n\n\n\n\n\n","category":"type"},{"location":"#CPIDataBase.VarCPIBase-Tuple{DataFrames.DataFrame, DataFrames.DataFrame}","page":"Home","title":"CPIDataBase.VarCPIBase","text":"VarCPIBase(df::DataFrame, gb::DataFrame)\n\nEste constructor devuelve una estructura VarCPIBase a partir del DataFrame  de índices de precios df, que contiene en las columnas las categorías o gastos  básicos del IPC y en las filas los períodos por meses. Las ponderaciones se obtienen  de la estructura gb, en la tercera columna de ponderaciones.\n\nPara conocer la estructura de los DataFrames necesarios, vea también: FullCPIBase.\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Union{Tuple{CountryStructure{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Home","title":"Base.eltype","text":"eltype(::CountryStructure{N, T})\n\nTipo de dato de punto flotante del contenedor de la estructura de país CountryStructure.\n\n\n\n\n\n","category":"method"},{"location":"#Base.getindex-Tuple{CountryStructure, Dates.Date, Dates.Date}","page":"Home","title":"Base.getindex","text":"getindex(cst::CountryStructure, startdate::Date, finaldate::Date)\n\nDevuelve una copia del CountryStructure con las bases modificadas para tener observaciones entre las fechas indicada por startdate y finaldate.\n\n\n\n\n\n","category":"method"},{"location":"#Base.getindex-Tuple{CountryStructure, Dates.Date}","page":"Home","title":"Base.getindex","text":"getindex(cst::CountryStructure, finaldate::Date)\n\nDevuelve una copia del CountryStructure hasta la fecha indicada por finaldate.\n\n\n\n\n\n","category":"method"},{"location":"#Base.getindex-Tuple{CountryStructure, Int64}","page":"Home","title":"Base.getindex","text":"getindex(cst::CountryStructure, i::Int)\n\nDevuelve la base número i de un contenedor CountryStructure.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.capitalize","page":"Home","title":"CPIDataBase.capitalize","text":"capitalize(v::AbstractVector, base_index::Real = 100)\ncapitalize(vmat::AbstractMatrix, base_index::Real = 100)\ncapitalize(vmat::AbstractMatrix, base_index::AbstractVector)\n\nFunción para encadenar un vector o matriz con variaciones intermensuales de índices de precios v o vmat para conformar un índice de precios cuyo valor base sea base_index.\n\n\n\n\n\n","category":"function"},{"location":"#CPIDataBase.capitalize!","page":"Home","title":"CPIDataBase.capitalize!","text":"capitalize!(idx:: AbstractVector, v::AbstractVector, base_index::Real)\ncapitalize!(vmat::AbstractMatrix, base_index = 100)\n\nFunción para encadenar un vector o matriz con variaciones intermensuales de índices de precios v o vmat para conformar un índice de precios cuyo valor base sea base_index y sea almacenado en idx o en la propia matriz vmat.\n\n\n\n\n\n","category":"function"},{"location":"#CPIDataBase.capitalize-Tuple{VarCPIBase}","page":"Home","title":"CPIDataBase.capitalize","text":"capitalize(base::VarCPIBase)\n\nEsto devuelve una nueva instancia (copia) de tipo IndexCPIBase de un objeto VarCPIBase.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.components-Tuple{CombinationFunction}","page":"Home","title":"CPIDataBase.components","text":"components(inflfn::CombinationFunction)\n\nDevuelve un DataFrame con las componentes de la función de combinación lineal y las ponderaciones asociadas.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.components-Tuple{EnsembleFunction}","page":"Home","title":"CPIDataBase.components","text":"components(inflfn::EnsembleFunction)\n\nDevuelve un DataFrame con las componentes del EnsembleFunction.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.getdates-Tuple{Dates.Date, AbstractMatrix}","page":"Home","title":"CPIDataBase.getdates","text":"getdates(startdate::Date, vmat::AbstractMatrix)\n\nObtiene un rango de fechas a partir de una fecha inicial startdate y la cantidad de períodos en la matriz de variaciones intermensuales vmat.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.getdates-Tuple{Dates.Date, Int64}","page":"Home","title":"CPIDataBase.getdates","text":"getdates(startdate::Date, periods::Int)\n\nObtiene un rango de fechas a partir de una fecha inicial startdate y la cantidad de períodos de una matriz de variaciones intermensuales \n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.getunionalltype-Tuple{MixedCountryStructure}","page":"Home","title":"CPIDataBase.getunionalltype","text":"getunionalltype(::MixedCountryStructure)\n\nDevuelve el tipo MixedCountryStructure. Utilizado al llamar getunionalltype sobre un CountryStructure para obtener el tipo concreto UnionAll.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.getunionalltype-Tuple{UniformCountryStructure}","page":"Home","title":"CPIDataBase.getunionalltype","text":"getunionalltype(::UniformCountryStructure)\n\nDevuelve el tipo UniformCountryStructure. Utilizado al llamar getunionalltype sobre un CountryStructure para obtener el tipo concreto UnionAll. \n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.infl_dates-Tuple{CountryStructure}","page":"Home","title":"CPIDataBase.infl_dates","text":"infl_periods(cst::CountryStructure)\n\nFechas correspondientes a la trayectorias de inflación computadas a partir un CountryStructure.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.infl_periods-Tuple{CountryStructure}","page":"Home","title":"CPIDataBase.infl_periods","text":"infl_periods(cst::CountryStructure)\n\nComputa el número de períodos de inflación de la estructura de país. Corresponde al número de observaciones intermensuales menos las primeras 11 observaciones de la primera base del IPC.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.load_data-Tuple{}","page":"Home","title":"CPIDataBase.load_data","text":"load_data(; full_precision = false)\n\nCarga los datos del archivo principal de datos del IPC definido en MAIN_DATAFILE  con precisión de 32 bits. \n\nLa opción full_precision permite cargar los datos con precisión de 64 bits.\nArchivo principal: MAIN_DATAFILE = joinpath(pkgdir(@__MODULE__), \"data\", \"gtdata32.jld2\").\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.measure_name-Tuple{InflationFunction}","page":"Home","title":"CPIDataBase.measure_name","text":"measure_name(inflfn::InflationFunction)\n\nEste método permite obtener el nombre convencional de una medida de inflación. \n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.measure_tag-Tuple{InflationFunction}","page":"Home","title":"CPIDataBase.measure_tag","text":"measure_tag(inflfn::InflationFunction)\n\nObtiene una etiqueta de la medida de inflación. Se puede utilizar para guardar como parámetro en archivos de resultados de evaluación.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.num_measures-Tuple{InflationFunction}","page":"Home","title":"CPIDataBase.num_measures","text":"num_measures(::InflationFunction)\n\nDevuelve la cantidad de medidas devueltas por la función de inflación. Las funciones de EnsembleFunction pueden computar varias medidas de inflación simultáneamente.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.params-Tuple{InflationFunction}","page":"Home","title":"CPIDataBase.params","text":"params(inflfn::InflationFunction)\n\nMétodo para obtener parámetros de la función de inflación. Devuelve una tupla con el conjunto de parámetros utilizado por la función de inflación inflfn. Este método debe redefinirse en las nuevas medidas de inflación si estas están parametrizadas.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.periods-Tuple{CountryStructure}","page":"Home","title":"CPIDataBase.periods","text":"periods(cst::CountryStructure)\n\nComputa el número de períodos (meses) en las bases de variaciones intermensuales de la estructura de país. \n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.periods-Tuple{VarCPIBase}","page":"Home","title":"CPIDataBase.periods","text":"periods(base::VarCPIBase)\n\nComputa el número de períodos (meses) en las base de variaciones intermensuales. \n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.varinteran","page":"Home","title":"CPIDataBase.varinteran","text":"varinteran(idx::AbstractVector, base_index::Real = 100) -> Vector{<:AbstractFloat}\nvarinteran(cpimat::AbstractMatrix, base_index::Real = 100) -> Matrix{<:AbstractFloat}\nvarinteran(cpimat::AbstractMatrix, base_index::AbstractVector) -> Matrix{<:AbstractFloat}\n\nObtiene variaciones interanuales del vector idx o de la matriz cpimat utilizando como índice base el número o vector base_index. \n\nSi base_index es un vector, se obtienen las variaciones interanuales utilizando diferentes índices base para cada columna de cpimat. El vector base_index debe tener la misma cantidad de columnas que cpimat.\n\n\n\n\n\n","category":"function"},{"location":"#CPIDataBase.varinteran!","page":"Home","title":"CPIDataBase.varinteran!","text":"varinteran!(v::AbstractVector, idx::AbstractVector, base_index::Real = 100) -> Vector{<:AbstractFloat}\n\nComputa las variaciones interanuales del vector idx utilizando como índice base base_index. Si se provee v, los resultados son guardados en este vector, en vez del mismo idx.\n\nEl vector v tiene 11 observaciones menos que idx.\n\n\n\n\n\n","category":"function"},{"location":"#CPIDataBase.varinterm","page":"Home","title":"CPIDataBase.varinterm","text":"varinterm(idx::AbstractVecOrMat, base_index = 100)\n\nFunción para computar un vector o una matriz de variaciones intermensuales de los índices de precios en idx, utilizando como índice base base_index en la primera observación. \n\nVer también: varinterm!\n\n\n\n\n\n","category":"function"},{"location":"#CPIDataBase.varinterm!","page":"Home","title":"CPIDataBase.varinterm!","text":"varinterm!([v::AbstractVecOrMat, ] idx::AbstractVecOrMat, base_index = 100)\n\nFunción para computar un vector o una matriz de variaciones intermensuales de los índices de precios en idx, utilizando como índice base base_index en la primera observación. Si idx es una matriz, v es opcional y el cómputo se realiza sobre la misma matriz. Si idx es un vector, es necesario proporcionar v para realizar el cómputo.\n\nVer también: varinterm.\n\n\n\n\n\n","category":"function"},{"location":"#CPIDataBase.varinterm-Tuple{IndexCPIBase}","page":"Home","title":"CPIDataBase.varinterm","text":"varinterm(base::IndexCPIBase)\n\nDevuelve una nueva copia de tipo VarCPIBase de un IndexCPIBase.\n\n\n\n\n\n","category":"method"},{"location":"#CPIDataBase.weights-Tuple{CombinationFunction}","page":"Home","title":"CPIDataBase.weights","text":"weights(combfn::CombinationFunction)\n\nDevuelve el vector de ponderaciones de una CombinationFunction.\n\n\n\n\n\n","category":"method"}]
}
