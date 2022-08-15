for i in range(0,16):

    print(f"""
    .list{i} [
        background-position-x: {i%4 *-100}px
        background-position-y: {i//4 *-100}px
    ]
    """)