file(GLOB SRC_LIST "*.cpp")

idf_component_register(
    SRCS ${SRC_LIST}
    INCLUDE_DIRS "."
)

target_compile_options(${COMPONENT_LIB} PRIVATE -Wno-error)