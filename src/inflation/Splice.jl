
"""
    Splice <: InflationFunction

    Splice(inflfn1, inflfn2, date1, date2)

Función de inflación para empalmar dos funciones de inflación.
Las fechas denotan el intervalo de transición
"""
struct Splice <: InflationFunction
    f::InflationFunction
    g::InflationFunction
    a::Date
    b::Date
end


# FUNCIONES AUXILIARES

function ramp_down(X::AbstractRange{T}, a::T, b::T) where T 
    A = min(a,b) 
    B = max(a,b)
    [x<A ? 1 : A<=x<=B ? (findfirst( X .== x)-findfirst( X .== A))/(findfirst( X .== B)-findfirst( X .== A)) : 0 for x in X]
end

function ramp_up(X::AbstractRange{T}, a::T, b::T) where T 
    1 .- ramp_down(X::AbstractRange{T}, a::T, b::T)
end

"""
    cpi_dates(cs::CountryStructure)

Devuelve las fechas en donde está definido el IPC para un CountryStructure.
Similar a infl_dates(cs::CountryStructure).
"""
function cpi_dates(cst::CountryStructure) 
    first(cst.base).dates[1]:Month(1):last(cst.base).dates[end]
end

function (inflfn::Splice)(cs::CountryStructure, ::CPIVarInterm)
    f = inflfn.f
    g = inflfn.g
    a = inflfn.a
    b = inflfn.b

    X = cpi_dates(cs)
    F = ramp_down(X,a,b)
    G = ramp_up(X,a,b)
    OUT = (f(cs, CPIIndex()) |> varinterm).*F .+ (g(cs, CPIIndex())|> varinterm) .* G 
    OUT 
end

function (inflfn::Splice)(cs::CountryStructure)
    cpi_index = inflfn(cs, CPIIndex())
    varinteran(cpi_index)
end

function (inflfn::Splice)(cs::CountryStructure, ::CPIIndex)
    v_interm = inflfn(cs, CPIVarInterm())
    capitalize!(v_interm, 100) 
    v_interm  
end

function measure_name(inflfn::Splice)
    return measure_name(inflfn.f)*" -> "*measure_name(inflfn.g)
end

function measure_tag(inflfn::Splice)
    return measure_tag(inflfn.f)*" -> "*measure_tag(inflfn.g)
end